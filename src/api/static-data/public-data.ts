import {  getPublic } from "../api";



export const jjrDate = () => {
    return getPublic("/json/jjr.json")
}