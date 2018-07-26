/* We need...
  - Navbar
  - carCard components
*/
import React, {Component} from 'react';
import {SingleCar} from './SingleCar';
import {fetchAllCars} from '../store/car';
import { connect } from 'react-redux';

class Cars extends Component {
  componentDidMount() {
    console.log("Component did mount.")
    this.props.fetchAllCars();
  }

  render() {
    const allCars = this.props.allCars;
    console.log('PROPS:', this.props)
    return (
      <div>
        {allCars.map((car) => {
          return (
            <SingleCar car={car}/>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('The state is:', state);
  return { allCars: state.allCars }
}

const mapDispatchToProps = dispatch => ({
  fetchAllCars: () => {
    console.log('Load Cars ran')
    dispatch(fetchAllCars());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cars);
