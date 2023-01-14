import React, { Component } from 'react';
import ListHeader from './ListHeader';
import ListLine from './ListLine';

class ListStat extends Component {
    state = { 
        limited: true,
    } 
    test=[{
        nom:"rakoto",
        prenom:"faly"
    },
    {
        nom:"rabe",
        prenom:"nandra"
    }];
    expand=()=>{
        this.setState({limited: false});
    }
    reduce=()=>{
        this.setState({limited: true});
    }
    genButton=()=>{
        if(this.state.limited){
            return <button onClick={this.expand}>Expand</button>;
        }
        else{
            return <button onClick={this.reduce}>Reduce</button>;
        }
    }
    render() { 
        let nb=0;
        var limited=this.state.limited;
        return (
            <table>
                <thead>
                    <ListHeader obj={this.props.tab[0]}></ListHeader>
                </thead>
                <tbody>
                    {this.props.tab.map(function(el){ 
                        nb++;
                        if(limited && nb>1){}else return <ListLine obj={el}/>
                        
                    }
                        
                        )}
                    <tr>
                        <td>
                            {this.genButton()}
                        </td>
                    </tr>
                </tbody>
            </table>)
        ;
    }
}
 
export default ListStat;