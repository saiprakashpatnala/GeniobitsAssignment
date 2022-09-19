import Popup from 'reactjs-popup'

import {AiOutlineClose} from 'react-icons/ai'

import './index.css'

const PopupComponent = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          + Add New Task
        </button>
      }
    >
      {close => (
        <>
          <div>
            <div className="close-button">
              <button
                type="button"
                className="close-button"
                onClick={() => close()}
              >
                <AiOutlineClose />
              </button>
            </div>
            <h1 className="heading">Add Task</h1>
            <hr />
            <div className="tasks-container">
              <div className="task">
                <div className="data-container">
                  <label htmlFor="name" className="label-element">
                    Task Name
                  </label>
                  <input
                    id="name"
                    className="name-container"
                    placeholder="Write taskName"
                    type="text"
                  />
                </div>
                <div className="data-container">
                  <label htmlFor="descriptions" className="label-element">
                    Description
                  </label>
                  <input
                    className="description-container"
                    id="description"
                    placeholder="write Description"
                    type="text"
                  />
                </div>
                <div className="data-container">
                  <label htmlFor="department" className="label-element">
                    Related To
                  </label>
                  <input
                    placeholder="write Department"
                    id="department"
                    type="text"
                    className="department-container"
                  />
                </div>
              </div>
              <div className="assign-container">
                <div className="data-container">
                  <label htmlFor="employ" className="label-element">
                    Assign To
                  </label>
                  <input
                    type="text"
                    className="employ-container"
                    placeholder="Enter name of Employ"
                  />
                </div>
                <div className="search-name">
                  <input
                    type="search"
                    value="Goutham Sharma"
                    className="name-1"
                  />
                  <input
                    type="search"
                    value="Harshad joshi"
                    className="name-2"
                  />
                  <input type="search" value="Kavin Seth" className="name-3" />
                </div>
              </div>
              <div className="date-container">
                <div className="data-container">
                  <label htmlFor="deadline" className="label-element">
                    Select Deadline
                  </label>
                  <input id="deadline" type="date" className="deadline-date" />
                </div>
                <p className="label-element">Set Priority</p>
                <div className="radio-container">
                  <input type="radio" id="high" name="priority" />
                  <label htmlFor="high" defaultChecked className="radio-label">
                    High
                  </label>
                </div>
                <div className="radio-container">
                  <input type="radio" id="medium" name="priority" />
                  <label
                    htmlFor="medium"
                    defaultChecked
                    className="radio-label"
                  >
                    Medium
                  </label>
                </div>
                <div className="radio-container">
                  <input type="radio" id="low" name="priority" />
                  <label htmlFor="low" defaultChecked className="radio-label">
                    Low
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="button-container">
              <button type="button" className="cancel-button">
                Cancel
              </button>
              <button type="button" className="add-button">
                Add
              </button>
            </div>
          </div>
        </>
      )}
    </Popup>
  </div>
)
export default PopupComponent
