import fs from "fs"
import util from "util"
import chalk from "chalk"
import { DESTINATIONPATH, DESTINATIONFILE } from "./config.js"

const superdestinationfile = DESTINATIONFILE.replace(/[0-9]/g, "")
const superdestinationpath = addSlash(DESTINATIONPATH)
const readfile = util.promisify(fs.readFile)
const writefile = util.promisify(fs.writeFile)



console.log("🎈", chalk.black.bgYellow(` Saving on ${superdestinationpath} `), "🎈")
console.log()



async function getfile(location) {
    console.log("🔍", chalk.white.bgBlue(` Reading the file ${location} `), "🔍")
    console.log()
    const result = await readfile(location)
    return result
}


async function savefile(body, i) {
    await writefile(`${superdestinationpath + superdestinationfile + i}.json`, body)
    console.log("🐛", chalk.white.bgGreen(` File ${i} saved `), "🐛")
}



function makeChunks(array, perChunk) {
  let chunk = []
  let tempObject = {}
  let counter = 1
  while (array.length > 0) {
    chunk = array.splice(0, perChunk)
    tempObject[counter] = chunk
    counter++
  }
  return tempObject
}


function addSlash(dest) {
  let destination = dest

  if(destination.charCodeAt(destination.length -1) != 47){
    destination += "/"
  }

  return destination
}


export { savefile, makeChunks, getfile }