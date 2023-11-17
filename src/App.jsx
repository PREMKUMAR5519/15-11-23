// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{width:'100vw',}}>
    <div className="row row-cols-1 row-cols-md-3" style={{ textAlign: 'center', width: '80vw',paddingLeft:'350px' }}>
      <div className="col" style={{height:'50vh'}}>
        <div className="card" style={{height:'39vh'}}>

          <div className="card-body">
            <p style={{ textAlign: 'center' }}>FREE</p>
            <h5 className="card-title">$2/Month</h5>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-check"></i>
              </div>
              <div><p className="card-text" id='flex3'>Single User</p></div>
            </div>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-check"></i>
              </div>
              <div><p className="card-text" id='flex3'>50GB Storage</p></div>
            </div>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-check"></i>
              </div>
              <div><p className="card-text" id='flex31'>Unlimited Projects</p></div>
            </div>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-x"></i>
              </div>
              <div><p className="card-text" id='flex3' style={{ color: 'grey' }}>Free Subdomain</p></div>
            </div>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-x"></i>
              </div>
              <div><p className="card-text" id='flex3' style={{ color: 'grey' }}>Monthly Status</p></div>
            </div>
          </div>
          <div style={{paddingBottom:'7px'}}>
          <button style={{width:"50%", backgroundColor:'midnightblue',borderRadius:'35px',}}>SELECT</button>
        </div>
        </div>
      </div>
      <div>
      <div className="col">
        <div className="card"style={{height:'39vh'}}>

          <div className="card-body">
            <p style={{ textAlign: 'center' }}>PLUS</p>
            <h5 className="card-title">$5/Month</h5>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-check"></i>
              </div>
              <div><p className="card-text" id='flex3'>Single User</p></div>
            </div>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-check"></i>
              </div>
              <div><p className="card-text" id='flex3'>50GB Storage</p></div>
            </div>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-check"></i>
              </div>
              <div><p className="card-text" id='flex31'>Unlimited Projects</p></div>
            </div>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-check"></i>
              </div>
              <div><p className="card-text" id='flex3' style={{ color: 'black' }}>Free Subdomain</p></div>
            </div>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-x"></i>
              </div>
              <div><p className="card-text" id='flex3' style={{ color: 'grey' }}>Monthly Status</p></div>
            </div>
          </div>
          <div style={{paddingBottom:'7px'}}>
          <button style={{width:"50%", backgroundColor:'midnightblue',borderRadius:'35px',}}>SELECT</button>
        </div>
        </div>
      </div>
      </div>
      <div className="col">
        <div className="card" style={{height:'39vh'}}>

          <div className="card-body">
            <p style={{ textAlign: 'center' }}>PRO</p>
            <h5 className="card-title">$10/Month</h5>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-check"></i>
              </div>
              <div><p className="card-text" id='flex3'>Single User</p></div>
            </div>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-check"></i>
              </div>
              <div><p className="card-text" id='flex3'>50GB Storage</p></div>
            </div>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-check"></i>
              </div>
              <div><p className="card-text" id='flex31'>Unlimited Projects</p></div>
            </div>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-check"></i>
              </div>
              <div><p className="card-text" id='flex3' style={{ color: 'black' }}>Free Subdomain</p></div>
            </div>
            <div className='flex'>
              <div id='flex2'><i class="bi bi-check"></i>
              </div>
              <div><p className="card-text" id='flex3' style={{ color: 'black' }}>Monthly Status</p></div>
            </div>
          </div>
          <div style={{paddingBottom:'7px'}}>
          <button style={{width:"50%", backgroundColor:'midnightblue',borderRadius:'35px',}}>SELECT</button>
        </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default App
