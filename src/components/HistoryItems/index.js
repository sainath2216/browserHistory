import './index.css'

const HistoryItems = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-items">
      <p className="time">{timeAccessed}</p>
      <div className="logo-container">
        <img src={logoUrl} alt="domin-logo" className="img" />
        <div className="logo-content">
          <p className="title">{title}</p>
          <p className="domin-name">{domainUrl}</p>
        </div>
      </div>
      <button data-testid="delete" className="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default HistoryItems
