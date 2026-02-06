/* DESIRE CHANGES --- 
- Fix star drawing error
- Add a text bubble that says "you win!" when blob reaches the star
*/

// Assign class "golstar" to star shape
class Goldstar {
  constructor({ x, y, w, h }) {
    this.x = x;
    this.y = y;

    this.w = w;
    this.h = h;
  }

  draw(fillColor) {
    fill(fillColor);
    star(this.x, this.y, this.w, this.h, 5);
  }
}

// Gold Colour Code: "#FFD25A"
