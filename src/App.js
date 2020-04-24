import React from 'react'
import './App.css'
import Header from './Header'
import Board from './components/Board/Board'
import backImg from './assets/images/back.jpg'
import cloudy from './assets/images/cloudyday.jpg'
import ferriswheel from './assets/images/ferriswheel.jpg'
import elephant from './assets/images/elephant.jpg'
import jimi from './assets/images/jimi.jpg'
import pikeplace from './assets/images/pikeplace.jpg'
import rainer from './assets/images/rainer.jpg'
import safeco from './assets/images/safeco.jpg'
import seattleferry from './assets/images/seattleferry.jpg'

function App() {
  const cards = buildCards()
  return (
    <div className="App">
      <Header />
      <Board cards={cards} />
    </div>

  )
}

export default App

function buildCards() {
  let id = 0
  const images = { cloudy, ferriswheel, elephant, jimi, pikeplace, rainer, safeco, seattleferry }
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg,
      frontImg: images[item],
      flipped: false,
    })
    return [...result, getCard(), getCard()]
  }, [])
  return suffle(cards)
}

function suffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len)
    let copyCurrent = { ...arr[i] }
    let copyRandom = { ...arr[randomIdx] }
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}
