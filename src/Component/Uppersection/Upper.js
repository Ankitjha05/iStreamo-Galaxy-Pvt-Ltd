import React from 'react'
import "./index.css"
const Upper = (props) => {
  return (
    <div className='uppersection'>
      <div className='col_1'>
      <div className='inneruppersection'>
        <div className='inneruppersection_img installedlogo'>

        </div>
        <div>
        <div>{props.list.totalInstall}</div>
        <span>App Installed</span>
        </div>
      </div>
      <div className='inneruppersection'>
        <div className='inneruppersection_img uninstalledlogo'>

        </div>
        <div>
        <div>{props.list.totaluninstall}</div>
        <span>App Uninstalled</span>
        </div>
      </div>
      </div>
      <div className='col_2'>
      <div className='inneruppersection'>
        <div className='inneruppersection_img'>

        </div>
        <div>
        <div>{props.list.activeinstall}</div>
        <span>Active Installs</span>
        </div>
      </div>
      <div className='inneruppersection'>
        <div className='inneruppersection_img'>

        </div>
        <div>
        <div>{props.list.aliveappusers}</div>
        <span>Alive App Users</span>
        </div>
      </div>
      </div>
      <div className='col_3'>
      <div className='inneruppersection'>
        <div className='inneruppersection_img'>

        </div>
        <div>
        <div>{props.list.churn}%</div>
        <span>Churn Rate</span>
        </div>
      </div>
      <div className='inneruppersection'>
        <div className='inneruppersection_img'>

        </div>
        <div>
        <div>{props.list.alivechurn}%</div>
        <span>Alive Churn Rate</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Upper
