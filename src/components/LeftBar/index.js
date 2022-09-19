import {AiOutlineAppstore, AiOutlineHome} from 'react-icons/ai'

import {GrResources} from 'react-icons/gr'

import {FiSettings, FiLogOut} from 'react-icons/fi'

import './index.css'

const LeftBar = () => (
  <div className="info-container">
    <div className="initial-container">
      <div className="container">
        <AiOutlineAppstore />
        <h1 className="sub-heading">My Apps</h1>
      </div>
      <div className="resource-container">
        <GrResources />
        <h1 className="name">Resources</h1>
      </div>
    </div>
    <div className="final-container">
      <div className="organization-container">
        <AiOutlineHome />
        <h1 className="name">My Organization</h1>
      </div>
      <div className="settings-container">
        <FiSettings />
        <h1 className="name">Settings</h1>
      </div>
      <div className="logout-container">
        <FiLogOut />
        <h1 className="name">Logout</h1>
      </div>
    </div>
  </div>
)

export default LeftBar
