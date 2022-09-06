import React, { Fragment } from 'react';

const About = () => {
    return (
        <div class="card text-center">
        <div class="card-header">
          Добропожаловать
        </div>
        <div class="card-body">
          <h5 class="card-title">Спасибо что посетили</h5>
          <p class="card-text">Это приложение было сделано для закрепления навыков работы в react по разным технологиям (Hoooks,)</p>
          <a href="#" class="btn btn-primary">В никуда</a>
        </div>
        <div class="card-footer text-muted">
          created by ripmag
        </div>
      </div>
    );
};

export default About;