// setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = 'white';
console.log(ctx);


class Particle {
    constructor(effect){
        this.effect = effect;
        this.radius = 5;
        this.x = this.radius + Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
        // this.radius = 15;
    }
    draw(context){
        context.fillStyle = 'hsl(' + this.x * 0.1 + ', 100%, 50%';
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
    update(){
        this.x++;
    }

}

class Effect {
    constructor(canvas){
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 200;
        this.createParticles();
    }
    createParticles(){
        for (let i = 0; i < this.numberOfParticles; i++){
            this.particles.push(new Particle(this));
        }
    }
    handleParticles(context){
        this.particles.forEach(particle => {
            particle.draw(context);
            particle.update();
        });
    }
}

const effect = new Effect(canvas);
effect.handleParticles(ctx)
console.log(effect);

// function animate() {
//     effect.handleParticles(ctx);
//     requestAnimationFrame(animate);
// }