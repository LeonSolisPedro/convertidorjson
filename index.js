import excelToJson from "convert-excel-to-json"
import chalk from "chalk"
import { format } from "json-string-formatter"
import { makeChunks, savefile, getfile } from "./utils.js"
import { TYPE, PERCHUNK, SOURCEFILE, NOMBREDELAHOJA, EXCELCOLUMNKEYS } from "./config.js"

let superObject

try {
  if (TYPE === 1) {
    const result = excelToJson({
      sourceFile: SOURCEFILE,
      header: {
        rows: 1
      },
      sheets: [NOMBREDELAHOJA],
      columnToKey: EXCELCOLUMNKEYS
    })
  
    superObject = result[NOMBREDELAHOJA]
    if(superObject.length === 0){
      throw new Error(`The Excel Sheet: "${NOMBREDELAHOJA}" is empty`)
    }
  }
  
  if (TYPE === 2) {
    const result = await getfile(SOURCEFILE)
  
    superObject = JSON.parse(result)
  }
  
  if (TYPE === 3) {
  
  }
  
  superObject = makeChunks(superObject, PERCHUNK)
  
  for (const i in superObject) {
    let body = superObject[i]
    body = JSON.stringify(body)
    body = body.replace(/"null"/gi, null)
    body = body.replace(/"false"/gi, false)
    body = body.replace(/"true"/gi, true)
    body = format(body, "  ")
    await savefile(body, i)
  }
} catch (error) {
  console.error(chalk.black.bgRed(" Error "), error.message)
}

