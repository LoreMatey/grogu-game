import './WinningGame.css'

const WinningGame = () => {
  return (
    <div className='winning-wrapper'>
      <div className='winning-info'>
      <h3>¡¡¡Enhorabuena!!<br /> Mando ha completado la misión</h3>
       <img alt='Mandalorian' width='500px' src='https://media.vandal.net/i/1280x720/8-2021/202183010361839_1.jpg.webp' />
       <button onClick={() => window.location.reload()}>Volver a jugar</button>
      </div>
    </div>
  )
}

export default WinningGame;