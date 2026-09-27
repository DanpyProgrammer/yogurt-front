import type { Album } from "./interfaces/albums.interface";
import "./style.css";

const table = document.querySelector("table") as HTMLTableElement;
const body = table.querySelector("tbody");

const request = await fetch("https://jsonplaceholder.typicode.com/albums");
const albums: Album[] = await request.json();

albums.forEach((album) => {
    if (body) {
        body.insertAdjacentHTML(
            "beforeend",
            `<tr>
                <td>${album.userId}</td>
                <td>${album.id}</td>
                <td>${album.title}</td>
            </tr>`
        );
    }
});