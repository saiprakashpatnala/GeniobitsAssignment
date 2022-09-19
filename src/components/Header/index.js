import {AiOutlineBell} from 'react-icons/ai'

import {BsPerson} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="nav-item">
    <div className="title-container">
      <div>
        <h1 className="heading">CAIT</h1>
        <p className="para">EDUSYS Pvt.Ltd</p>
      </div>
      <div>
        <h1 className="heading">
          My Apps &gt; <span>Tasks</span>
        </h1>
      </div>
    </div>
    <div className="icon-container">
      <button type="button" className="button">
        <AiOutlineBell className="icon" />
      </button>
      <button type="button" className="button">
        <BsPerson className="icon" />
      </button>
    </div>
  </nav>
)

export default Header
