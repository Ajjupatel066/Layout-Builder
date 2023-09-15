// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onchangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavBar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavBar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-container">
          <h1 className="configuration-heading">Layout</h1>
          <div className="check-box-container">
            <input
              id="content"
              type="checkbox"
              className="check-box"
              checked={showContent}
              onChange={onchangeContent}
            />
            <label htmlFor="content" className="label-name">
              Content
            </label>
          </div>
          <div className="check-box-container">
            <input
              id="left-navbar"
              type="checkbox"
              className="check-box"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavBar}
            />
            <label htmlFor="left-navbar" className="label-name">
              Left Navbar
            </label>
          </div>
          <div className="check-box-container">
            <input
              id="right-navbar"
              type="checkbox"
              className="check-box"
              checked={showRightNavbar}
              onChange={onChangeRightNavBar}
            />
            <label htmlFor="right-navbar" className="label-name">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
