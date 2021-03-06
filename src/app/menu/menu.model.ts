import { Item } from "./item/item.model";

export class Menu {
    items: Item[] = new Array();

    constructor() {
        let item: Item = new Item("Köfte", 12, 400, "Our namesake. Inspired by the finest restaurants in Istanbul. Comes with three skewers of your choice of meat (Beef or Lamb) and a side of rice.","https://static.wixstatic.com/media/0462a6_d472090ebdff4a40b3af2d64dd99b9d4~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp");
        item.addOption("Meat", ["Beef", "Lamb"]);
        this.items.push(item);
        item = new Item("Döner Kebap", 11, 310, "Shaved vertical spit-roasted meat served in a wrap with lettuce, tomato, onions and a white sauce.                        ","https://static.wixstatic.com/media/0462a6_55f2c287f4144c4da3974cdef822aa21~mv2.png/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp");
        item.addOption("Meat", ["Lamb", "Beef", "Turkey"]);
        this.items.push(item);
        this.items.push(new Item("French Fries", 4, 420, "Hand cut russet potatoes fried and served with ketchup                                                                    ", "https://static.wixstatic.com/media/0462a6_7b4b88f6147949539e09d7297e627d47~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Mixed Appetizers        ", 10, 750, "Hummus, babaganoush, ezme, labne                                                              ", "https://static.wixstatic.com/media/0462a6_3fe7ab49cd7c40c397dd7f0e8e6c0d5f~mv2.png/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Felafel ( 6 Piece )", 6, 360, "Deep-fried ball made from ground chickpeas and some herbs                                                          ", "https://static.wixstatic.com/media/0462a6_f2ea1a13cd6d41edbcedb91183b78f23~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Ezme", 6, 210, "Hot spicy freshly mashed tomato with onion, cucumber and green herbs                                                              ", "https://static.wixstatic.com/media/0462a6_830c4ac68d3d4d51a54e9dbcf4b139af~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Eggplant Sauce", 6, 210, "Egg poached in a sauce of tomatoes, olive oil, peppers, onion and garlic. Spiced with paprika, cayenne, and nutmeg      ", "https://static.wixstatic.com/media/0462a6_01eeb72199464d0ea1ae7834fb76a49e~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Hummus", 4, 390, "Mashed chickpeas blended with tahini, lemon juice and garlic                                                             ", "https://static.wixstatic.com/media/0462a6_c7898a2861e643b991078c3c2314eb91~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Babaganoush", 4, 300, "Mashed cooked eggplant mixed tahini, olive oil, possibly lemon juice and various seasonings                                                              ", "https://static.wixstatic.com/media/0462a6_5d4640ad175644b48c685c331a36eed0~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Lentil Soup", 3, 200, "Based on red lentils with the husk                                                              ", "https://static.wixstatic.com/media/0462a6_2926e5bf2ab44143819b5676597b5a22~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Shepherd Salad", 6, 200, "Finely chopped tomatoes, cucumbers, onion and flat-leaf parsley. The dressing consist of lemon juice, olive oil and salt", "https://static.wixstatic.com/media/0462a6_4fae56e3ba0d48d2b9c179a698616c49~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Diced Lamb Pide", 13, 620, "Spiced lamb and cheese in turkish pizza dough                                                                         ", "https://static.wixstatic.com/media/0462a6_d350d32714514b518e3d4ed804d6801b~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Chicken Shish Kebab        ", 13, 650, "2 skewers of chicken breast cubes, marinated and grilled                                                              ", "https://static.wixstatic.com/media/0462a6_fb3d215f17524616bbdbfb805d37b5a5~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Lamb Adana", 14, 670, "2 grilled skewers of ground lamb seasoned with red peppers                                                             ", "https://static.wixstatic.com/media/0462a6_5d0baf4c93ec4fe29b2ffd0f35f62b61~mv2.png/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Mixed Grill       ", 27, 490, "1 chicken chop, 1 chicken shish, 1 lamb adana, 2 kofte, 1 beef shish                                                             ", "https://static.wixstatic.com/media/0462a6_52fbada46aa44d2b855cc85a3e034353~mv2.png/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Lamb Adana Sandwich", 7, 450, "Sandwich and Fries                                                              ", "https://static.wixstatic.com/media/0462a6_032be0d1d17e471694d298604801d3d9~mv2.png/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Beef Shish Sandwich", 7, 480, "Sandwich and Fries                                                              ", "https://static.wixstatic.com/media/0462a6_032be0d1d17e471694d298604801d3d9~mv2.png/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Lamb Shish Sandwich", 7, 460, "Sandwich and Fries                                                              ", "https://static.wixstatic.com/media/0462a6_032be0d1d17e471694d298604801d3d9~mv2.png/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Baklava", 5, 440, "Layered butter filled with crushed pistachios and dipped in honey                                                              ", "https://static.wixstatic.com/media/0462a6_f987b3ed722b45fa82fd7a71946c22f4~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Walnut Baklava", 5, 380, "Layered butter filled with crushed walnuts and dipped in honey                                                              ", "https://static.wixstatic.com/media/0462a6_00b68ab719274346988a9d8f4f6e4a34~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        this.items.push(new Item("Durum Baklava", 5, 400, "Layered butter filled with crushed pistachios and dipped in honey                                                              ", "https://static.wixstatic.com/media/0462a6_bc40f4c703374fbfb9e5d50313af8937~mv2.png/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"));
        //Coffee
        item = new Item("Espresso", 4, 200, "Concentrated single or double shot of our signature dark roast coffee", "/assets/img/item/espresso.png");
        item.addOption("Size", ["Medium", "Small", "Large"]);
        item.addOption("Strength", ["Single Shot", "Double Shot"]);
        this.items.push(item);

        item = new Item("Americano", 4, 180, "Our signature dark roast coffee espresso diluted with hot water", "/assets/img/item/americano.jpg");
        item.addOption("Size", ["Medium", "Small", "Large"]);
        item.addOption("Strength", ["Single Shot", "Double Shot"]);
        this.items.push(item);

        item = new Item("Cinnamon Latte", 5, 300, "Our signature dark roast coffee espresso with steamed milk and a hint of cinnamon", "/assets/img/item/latte.jpg");
        item.addOption("Size", ["Medium", "Small", "Large"]);
        this.items.push(item);

    }
}