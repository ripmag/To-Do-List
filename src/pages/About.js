import React from 'react';

const About = () => {
    return (
        <div className="card text-center">
        <div className="card-header">
          Добропожаловать
        </div>
        <div className="card-body">
          <h5 className="card-title">Спасибо что посетили</h5>
          <p className="card-text">Это приложение было сделано для закрепления навыков работы в react по разным технологиям <br/>(<span className='animate'>hoooks, firebase, react-transition-group</span>)</p>          
        </div>
        <div className="card-footer text-muted">
          created by ripmag
        </div>
      </div>
    );
};

export default About;