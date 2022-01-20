import * as pathLib from "path"

export const fromRootPath = (path) =>{
    return pathLib.join(__dirname, path)
} 
