// Getting pdfjs to work is tricky. The following 3 lines would make it work
// https://stackoverflow.com/a/63486898/7699841
import * as pdfjs from "pdfjs-dist";
// @ts-ignore
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

import type { TextItem as PdfjsTextItem } from "pdfjs-dist/types/src/display/api";
import type { TextItem, TextItems } from "lib/parse-resume-from-pdf/types";


export const readPdf = async (fileUrl: string): Promise<TextItems> => {
  const pdfFile = await pdfjs.getDocument(fileUrl).promise;
  let textItems: TextItems = [];

  for (let i = 1; i <= pdfFile.numPages; i++) {
    // Parse each page into text content
    const page = await pdfFile.getPage(i);
    const textContent = await page.getTextContent();

    // Wait for font data to be loaded
    await page.getOperatorList();
    const commonObjs = page.commonObjs;

    // Convert Pdfjs TextItem type to new TextItem type
    const pageTextItems = textContent.items.map((item) => {
      const {
        str: text,
        dir, // Remove text direction
        transform,
        fontName: pdfFontName,
        ...otherProps
      } = item as PdfjsTextItem;

      const x = transform[4];
      const y = transform[5];

      
      const fontObj = commonObjs.get(pdfFontName);
      const fontName = fontObj.name;


      const newText = text.replace(/-­‐/g, "-");

      const newItem = {
        ...otherProps,
        fontName,
        text: newText,
        x,
        y,
      };
      return newItem;
    });

    textItems.push(...pageTextItems);
  }

  
  const isEmptySpace = (textItem: TextItem) =>
    !textItem.hasEOL && textItem.text.trim() === "";
  textItems = textItems.filter((textItem) => !isEmptySpace(textItem));

  return textItems;
};
