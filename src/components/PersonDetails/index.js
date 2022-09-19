import './index.css'

const PersonDetails = props => {
  const {details} = props
  const {name, email, gender, status} = details
  return (
    <li className="list-item">
      <p className="name">{name}</p>
      <p className="gender">{gender}</p>
      <p className="email">{email}</p>

      <p className="status">{status}</p>
    </li>
  )
}

export default PersonDetails
