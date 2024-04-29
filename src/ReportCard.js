import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

class ReportCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      accepted: false,
      rejected: false
    };
  }

  flipCard = (e) => {
    if (e.target.tagName === 'BUTTON') {
      this.setState({ isFlipped: !this.state.isFlipped });
    }
  }

  acceptCard = () => {
    this.setState({ accepted: true, rejected: false });
  }

  rejectCard = () => {
    this.setState({ rejected: true, accepted: false });
  }

  render() {
    const { data } = this.props;
    const { isFlipped, accepted, rejected } = this.state;

    return (
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
        <div className='card' onClick={this.flipCard}>
          <div className="bg-white h-[450px] text-black rounded-xl">
            <div className="h-56 rounded-t-xl bg-yellow-500 flex justify-center items-center">
              <img src={data.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 p-4">
              <p className="text-xl font-semibold">{data.name}</p>
              <p>{data.date}</p>
              <p>{data.review}</p>
              <p>{data.place}</p>
              <button className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-xl mt-4">Más Información</button>
            </div>
          </div>
        </div>
        <div className='card card-back' onClick={this.flipCard}>
          <div className="bg-white h-[450px] text-black rounded-xl">
            <div className="h-56 rounded-t-xl bg-yellow-500 flex justify-center items-center">
              <img src={data.imgBack} alt="" className="h-44 w-44 "/>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 p-4">
              <p>{data.date}</p>
              <p>{data.reviewBack}</p>
              <div>
                {accepted && (
                  <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-xl mt-4">Aceptado</span>
                )}
                {rejected && (
                  <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-xl mt-4">Rechazado</span>
                )}
                {!accepted && !rejected && (
                  <>
                    <button className="bg-green-500 text-white text-sm px-2 py-1 rounded-xl mr-2" onClick={this.acceptCard}>Aceptar</button>
                    <button className="bg-red-500 text-white text-sm px-2 py-1 rounded-xl" onClick={this.rejectCard}>Rechazar</button>
                  </>
                )}
              </div>
              <button className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-xl mt-4">Volver</button>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default ReportCard;
