import { Item } from "./item/item.model";

export class Menu {
    items: Item[] = new Array();

    constructor() {
        this.items.push(new Item("Köfte", 12, 400, "Our namesake. Inspired by the finest restaurants in Istanbul. Comes with three skewers of your choice of meat (Beef or Lamb) and a side of rice.","https://static.wixstatic.com/media/0462a6_d472090ebdff4a40b3af2d64dd99b9d4~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Döner Kebap", 11, 310, "Shaved vertical spit-roasted beef served in a wrap with lettuce, tomato, onions and a white sauce.","https://static.wixstatic.com/media/0462a6_55f2c287f4144c4da3974cdef822aa21~mv2.png/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Shepherd Salad", 6, 200, "Finely chopped tomatoes, cucumbers, onion and flat-leaf parsley. The dressing consist of lemon juice, olive oil and salt", "https://static.wixstatic.com/media/0462a6_4fae56e3ba0d48d2b9c179a698616c49~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Ezme", 6, 210, "Hot spicy freshly mashed tomato with onion, cucumber and green herbs", "https://static.wixstatic.com/media/0462a6_830c4ac68d3d4d51a54e9dbcf4b139af~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Eggplant Sauce", 6, 210, "Egg poached in a sauce of tomatoes, olive oil, peppers, onion and garlic. Spiced with paprika, cayenne, and nutmeg", "https://static.wixstatic.com/media/0462a6_01eeb72199464d0ea1ae7834fb76a49e~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("French Fries", 4, 420, "Hand cut russet potatoes fried and served with ketchup", "https://static.wixstatic.com/media/0462a6_7b4b88f6147949539e09d7297e627d47~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Felafel ( 6 Piece )", 6, 360, "Deep-fried ball made from ground chickpeas and some herbs", "https://static.wixstatic.com/media/0462a6_f2ea1a13cd6d41edbcedb91183b78f23~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Diced Lamb Pide", 13, 620, "Spiced lamb and cheese in turkish pizza dough", "https://static.wixstatic.com/media/0462a6_d350d32714514b518e3d4ed804d6801b~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Baklava", 5, 390, "Layered butter filled with crushed pistachios and dipped in honey", "https://static.wixstatic.com/media/0462a6_f987b3ed722b45fa82fd7a71946c22f4~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Köfte", 12, 400, "Our namesake. Inspired by the finest restaurants in Istanbul. Comes with three skewers of your choice of meat (Beef or Lamb) and a side of rice.","https://static.wixstatic.com/media/0462a6_d472090ebdff4a40b3af2d64dd99b9d4~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Döner Kebap", 11, 310, "Shaved vertical spit-roasted beef served in a wrap with lettuce, tomato, onions and a white sauce.","https://static.wixstatic.com/media/0462a6_55f2c287f4144c4da3974cdef822aa21~mv2.png/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Shepherd Salad", 6, 200, "Finely chopped tomatoes, cucumbers, onion and flat-leaf parsley. The dressing consist of lemon juice, olive oil and salt", "https://static.wixstatic.com/media/0462a6_4fae56e3ba0d48d2b9c179a698616c49~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Ezme", 6, 210, "Hot spicy freshly mashed tomato with onion, cucumber and green herbs", "https://static.wixstatic.com/media/0462a6_830c4ac68d3d4d51a54e9dbcf4b139af~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Eggplant Sauce", 6, 210, "Egg poached in a sauce of tomatoes, olive oil, peppers, onion and garlic. Spiced with paprika, cayenne, and nutmeg", "https://static.wixstatic.com/media/0462a6_01eeb72199464d0ea1ae7834fb76a49e~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("French Fries", 4, 420, "Hand cut russet potatoes fried and served with ketchup", "https://static.wixstatic.com/media/0462a6_7b4b88f6147949539e09d7297e627d47~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Felafel ( 6 Piece )", 6, 360, "Deep-fried ball made from ground chickpeas and some herbs", "https://static.wixstatic.com/media/0462a6_f2ea1a13cd6d41edbcedb91183b78f23~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Diced Lamb Pide", 13, 620, "Spiced lamb and cheese in turkish pizza dough", "https://static.wixstatic.com/media/0462a6_d350d32714514b518e3d4ed804d6801b~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Baklava", 5, 390, "Layered butter filled with crushed pistachios and dipped in honey", "https://static.wixstatic.com/media/0462a6_f987b3ed722b45fa82fd7a71946c22f4~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
    }
}