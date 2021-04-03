import React from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo_icon from './assets/crop.svg'
import overview from './assets/visualization.svg'
import orders from './assets/page.svg'
import products from './assets/shopping-bags.svg'
import settings from './assets/gear.svg'
import send from './assets/send (1).svg'
import folllowers from './assets/multiple-users-silhouette.svg'
import search from './assets/loupe.svg' 
import pichart from './assets/pie-chart.svg'
import cart from './assets/shopping-cart.svg'
import visitors from './assets/visited.svg'
import shop from './assets/shopping.svg'
import edit from './assets/edit.svg'
import notify from './assets/bell.svg'



function App(props) {
  return (
    <div className="full-body">
      <div className='container-fluid'>
        <div className='row'>
        <div className='col-2'>
          <div className="Menu-bar">

            <div className='Brand-Logo d-flex'>
            <div className='logo-style text-center'>  <img src={logo_icon} className='logo-img-style' /> </div>
            <div className='brand-title'>Pulse</div>
            </div>

            <div className='menu-item' style={{position:'relative'}}>
              <div>
                <div className="menu-titile ml-2 mt-5">Menu</div>
                <div className='menu-item-list mt-3 ml-2 active'><img src={overview}/>Overview</div>
                <div className='menu-item-list mt-3 ml-2'><img src={orders}/>Orders</div>
                <div className='menu-item-list mt-3 ml-2'><img src={products}/>Products</div>
                <div className='menu-item-list mt-3 ml-2'><img src={settings}/>Settings</div>
              </div>
              <div>
                <div className="menu-titile ml-2 mt-4">Business</div>
                <div className='menu-item-list mt-3 ml-2'><img src={send}/>Settings</div>
                <div className='menu-item-list mt-3 ml-2'><img src={folllowers}/>Followers</div>
              </div>
              <div className="bottom-nav mt-5 ml-2" >
                <div className="copy-right">&copy; 2020</div>
                <div>Lorem ipsum doller</div>
                <div>Lorem ipsum</div>
              </div>
            </div>


          </div>
        </div>
        <div className='col-7' style={{borderRight: '2px solid #eef4fc'}}>
          <div className="container-fluid">
            <div className="row">
            <div className="col-12 px-0 my-0">
            <img src={search} style={{height:'20px;',width:'25px',position:'absolute',top:'13px',left:'20px'}}></img>
            <input className="form-control ml-0 mr-0 pl-0 pr-0"></input>
            </div>

            <div className='mt-5'>Overview</div>
            
            <div className='col-12 mx-0 px-0 mt-2'>
              <div className="row mx-1 justify-content-between">
              <div className='col-2 px-2 card'>
              <div className="d-flex justify-content-between">
                <div><img src={shop} className="mt-2"></img></div>
                <div className="mt-2 text-success">+24%</div>
              </div>
              <div className="amount mt-2 mb-1 ml-1">$27,340.00</div>
              <div className="sales mb-2 ml-1">Total Sales</div>
              
              </div>

              <div className='col-2 px-2 card'>
              <div className="d-flex justify-content-between">
                <div><img src={pichart} className="mt-2"></img></div>
                <div className="mt-2 text-danger">-32%</div>
              </div>
              <div className="amount mt-2 mb-1 ml-1">$27,340.00</div>
              <div className="sales mb-2 ml-1">Total Expenses</div>
              </div>

              <div className='col-2 px-2 card'>
              <div className="d-flex justify-content-between">
                <div><img src={visitors} className="mt-2"></img></div>
                <div className="mt-2 text-success">+24%</div>
              </div>
              <div className="amount mt-2 mb-1 ml-1">18,240.00</div>
              <div className="sales mb-2 ml-1">Total Visitors</div>
              </div>

              <div className='col-2 px-2 card'>
              <div className="d-flex justify-content-between">
                <div><img src={cart} className="mt-2"></img></div>
                <div className="mt-2 text-success">-12%</div>
              </div>
              <div className="amount mt-2 mb-1 ml-1">$11,340.00</div>
              <div className="sales mb-2 ml-1">Total Orders</div>
              </div>

              </div>
            </div>

            <div className=" col-12 mx-0 px-0  mx-1 mt-3">
            <div className="chart-box">
            
            <div className="d-flex justify-content-between"><div className="ml-2" style={{alignSelf:'center'}}>Income <span className='ml-2 text-muted'>Expensce</span></div>
            <div><select className='form-controle'><option>2020</option></select></div></div>

            <div className='d-flex justify-content-around'>
            <div style={{marginTop:'8vh'}}><button className="btn jan-bar bar"></button>
            <div>Jan</div></div> 
            <div ><button className="btn feb-bar bar"></button><div>Feb</div></div> 
            <div  style={{marginTop:'5vh'}}><button className="btn march-bar bar"></button><div>March</div></div> 
            <div><button className="btn april-bar bar"></button><div>April</div></div> 
            <div style={{marginTop:'10vh'}}><button className="btn may-bar bar"></button><div>May</div></div> 
            <div><button className="btn june-bar bar"></button><div>June</div></div>  
            </div>         

            </div>
            </div>

          <div className='col-12 px-0 mx-1 mt-3'>
            <div className="table-content" style={{border:'1px solid #eef4fc',borderRadius:'10px',padding:'10px'}}>
              <div>
                <h6>Popular products</h6>
                <table className="table">
                  <tr>
                  <th>Photots</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Catagory</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Status</th>
                  </tr>
                  <tr className=''>
                  <td><img src={cart} height='16px'></img></td>
                  <td>Hat<br/><span className='text-muted'>#121321312312</span></td>
                  <td>Aug 12,2020</td>
                  <td>Fashon</td>
                  <td>Fashon</td>
                  <td className='text-success'>$99.90</td>
                  <td>Available<br/><span className='text-muted'>#121321312312</span></td>
                  </tr>
                  
                </table>
              </div>
            </div>
          </div>


            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className="d-flex justify-content-between">
            <div className='right-icon'><img src={notify} height='20px'></img></div>
            <div className='right-icon'><img src={edit} height='20px'></img></div>
          </div>
          <div className='circle'></div>
          <div className='text-center mt-3 pulsa'>Pulsa</div>
          <div className='pulsa mt-3'>Reputation</div>

          <div style={{border:'1px solid #eef4fc'}}className='mt-3 py-3 pl-2 d-flex'>
            <div style={{backgroundColor:'#fdf3ed',padding:'10px'}}className='mr-3'><img src={overview} height='16px'></img></div>
            <div style={{width:"80%"}}>Star
              <span style={{float:'right'}}>80%</span>
            <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
          </div>

          <div className='pulsa mt-4'>
          Recent Orders
          </div>

    <div className='chart-box'>
      <table className='table'>
        <tr>
          <td><img src={cart} height='20px' /></td>
          <td>Rmi<br /><span className='text-muted'>2 mins ago</span></td>
          <td className='text-success'>+$80.00</td>
        </tr>
        <tr>
          <td><img src={cart} height='20px' /></td>
          <td>Rmi<br /><span className='text-muted'>2 mins ago</span></td>
          <td className='text-success'>+$80.00</td>
        </tr>
        <tr>
          <td><img src={cart} height='20px' /></td>
          <td>Rmi<br /><span className='text-muted'>2 mins ago</span></td>
          <td className='text-success'>+$80.00</td>
        </tr>
      </table>
    </div>

        </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;