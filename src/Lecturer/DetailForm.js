import React, {Component} from 'react';
import {
    BroswerRouter as Router,
    Route,
    Link
} from 'react-router-dom';
//import { lecturer } from '../lecturerdata';
//import axios from 'axios';
import LecturerDetailView from './LecturerDetailView';
export default class DetailForm extends Component {
    
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.state = this.props.object;
        let object = ('view' === this.props.action);
        console.log(this.props.object);

        this.setState({isEditing: false});
    }

    handleChange(event) {
        let {name, value} = event.target;
        console.log({name});
        if (this.state.isEditing) {
            this.setState({lecturer: {...this.state.lecturer, [name]: value}});
            console.log(this.lecturer)
        } else {
            return;
        }

    }

    // renderDetailView() {
    //         const lecturerlist = this.state;
    //         console.log(lecturer);
    //         return (
    //             <div className="form-group">
    //                 <form>
    //                     <label>Name</label>
    //                     <input type="text" className="form-control"  value={lecturer[0].name || ''} name="code" />
    //                     <label>Occupation</label>
    //                     <input type="text" className="form-control"  value={lecturer[0].occupation || ''} name="code"  />
    //                     <label>School</label>
    //                     <input type="text" className="form-control"  value={lecturer[0].school || ''} name="code"  />
    //                     <label>Faculty</label>
    //                     <input type="text" className="form-control"  value={lecturer[0].faculty || ''} name="code" />
    //                     <label>Phone</label>
    //                     <input type="text" className="form-control"  value={lecturer[0].phone || ''} name="code"  />
    //                     <label>E-mail</label>
    //                     <input type="text" className="form-control"  value={lecturer[0].email || ''} name="code" />
    //                 </form>
    //             </div>
    //             );        
    //     }

    render() {
        // const {isLoading, isEditing, lecturer} = this.state;
        // if(isLoading) {
        //    return(<h2>Loading...</h2>)
       //return this.renderDetailView()
       const lecturers = this.props.lecturer;
       console.log( this.props.lecturer );
        return(
           
            <div className="form-group">
                <form>
                    <label>Name</label>
                    <input type="text" className="form-control"   onChange={this.handleChange} value={this.state.lecturer || ''} readOnly={!this.state.isEditing} />
                    <label>Occupation</label>
                    <input type="text" className="form-control"  onChange={this.handleChange} value={this.state.lecturer || ''}  readOnly={!this.state.isEditing}  />
                    <label>School</label>
                    <input type="text" className="form-control"  onChange={this.handleChange} value={this.state.lecturer || ''}  readOnly={!this.state.isEditing}  />
                    <label>Faculty</label>
                    <input type="text" className="form-control"  onChange={this.handleChange} value={this.state.lecturer || ''}  readOnly={!this.state.isEditing} />
                    <label>Phone</label>
                    <input type="text" className="form-control" onChange={this.handleChange}  value={this.state.lecturer || ''}  readOnly={!this.state.isEditing}  />
                    <label>E-mail</label>
                    <input type="text" className="form-control" onChange={this.handleChange} value={this.state.lecturer || ''}  readOnly={!this.state.isEditing} />
                </form>
                
            </div>
       );
    }
}