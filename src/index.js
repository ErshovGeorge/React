import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Draw extends React.Component {
    constructor() {
      super();
      this.state = {
        dy: 0,
        k: 10,
        m: 20,
        g: 9.8,
        v: 0,
      }
      this.handleClick = this.handleClick.bind(this)
      this.ball = this.ball.bind(this)
    }

    componentDidMount() {
        this.ball(this.state.dy)
    }

    componentDidUpdate() {
        this.ball(this.state.dy)
    }

    handleClick() {

      let m_previos = this.state.m;
      let k_previos = this.state.k;
      this.setState({k: document.getElementById("k").value});
      this.setState({m: document.getElementById("m").value})
      if (this.state.m == "" || this.state.m == 0){
        this.setState({m: m_previos});
      }
      if (this.state.k == "" || this.state.k == 0){
        this.setState({k: k_previos});
      }


      let a = this.state.g - this.state.k/this.state.m * this.state.dy;
      this.state.v = this.state.v + a * 0.1;
      this.setState({dy : this.state.dy + this.state.v*0.1});
      requestAnimationFrame(this.handleClick);
    }



    ball(dy) {
      const ctx = this.refs.canvas.getContext('2d');
      ctx.clearRect(0, 0, 1000, 1000);
      ctx.beginPath();
      ctx.lineWidth=4;

      ctx.moveTo(450, 30);
      ctx.lineTo(550, 30);
      ctx.moveTo(450, 30);
      ctx.lineTo(460, 10);
      ctx.moveTo(470, 30);
      ctx.lineTo(480, 10);
      ctx.moveTo(490, 30);
      ctx.lineTo(500, 10);
      ctx.moveTo(510, 30);
      ctx.lineTo(520, 10);
      ctx.moveTo(530, 30);
      ctx.lineTo(540, 10);
      ctx.moveTo(550, 30);
      ctx.lineTo(560, 10);
      ctx.moveTo(500, 30);

      ctx.lineTo(500, 50);
      ctx.lineTo(525, 75 + dy * 0.1);
      ctx.lineTo(475, 100 +  dy * 0.2);
      ctx.lineTo(525, 125 + dy  * 0.3);
      ctx.lineTo(475, 150 + dy * 0.4);
      ctx.lineTo(525, 175 + dy * 0.5);
      ctx.lineTo(475, 200 + dy * 0.6);
      ctx.lineTo(525, 225 + dy * 0.7);
      ctx.lineTo(475, 250 + dy * 0.8);
      ctx.lineTo(525, 275 + dy * 0.9);
      ctx.lineTo(500, 300 + dy);
      ctx.lineTo(500, 325 + dy);
      ctx.strokeStyle='black';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(500, 375 + dy, 50, 0, 2*Math.PI, false);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.strokeStyle='red';
      ctx.stroke();
    }
    render() {
        return (
          <div>
            <label for="k">Введите k:</label>
            <input type="text" id="k"></input>
            <label for="m">Введите m:</label>
            <input type="text" id="m"></input>

            <canvas ref="canvas" width={600} height={700}/>
            <button onClick={this.handleClick}>Пуск!</button>
            </div>
        );
    }
}



// class Buttons extends React.Component{
//   handleClick(){
//     let k = document.getElementById("k").value;
//     let m = document.getElementById("m").value;
//   }
//
//   render(){
//     return(
//
//     <div>
//     <label for="k">Введите k:</label>
//     <input type="text" id="k"></input>
//     <label for="m">Введите m:</label>
//     <input type="text" id="m"></input>
//     <input type="button"
//      onclick={() => alert("Click")}
//      value='Пуск'></input>
//     </div>
//   );
// }
// }



ReactDOM.render(
  <React.StrictMode>
    <Draw />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
