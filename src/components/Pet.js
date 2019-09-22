import React from 'react'

class Pet extends React.Component {
  showGender = () => {
    const male = '♂';
    const female = '♀';
    if (this.props.pet.gender === 'male') {
      return male;
    } else {
      return female;
    }
  }

  render() {
    let adopted;
    if (this.props.pet.isAdopted === true) {
      adopted = <button className="ui disabled button">Already adopted</button>
    } else {
      adopted = <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)} >Adopt pet</button>
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name} {this.showGender()}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adopted}
        </div>
      </div>
    )
  }
}

export default Pet
