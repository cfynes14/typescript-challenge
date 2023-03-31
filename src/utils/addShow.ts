import { Show } from "../models/Show"

const addShow = (param1: Show | string, genre: string = "", rating: number = 0, status: string = "", airingDate: string = ""): Show => {
    let show = {} as Show
    if (param1 === typeof String){
        show.title = param1
        show.genre = genre
        show.rating = rating
        show.status = status
        show.airingDate = airingDate
    } else {
        show = param1 as Show
    }
    return show
}

export default addShow