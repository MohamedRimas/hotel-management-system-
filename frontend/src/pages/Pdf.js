import React, { Component } from 'react';
import jsPDF from 'jspdf';

class Pdf extends Component {
    pdfGenerate=()=>{
        var doc=new jsPDF('landscape','px','a4','false');
        doc.text(60,60,'fullname:Mohamed')
        doc.text(60,80,'nic:200031900795')
        doc.text(60,100,'phone:0775481991')
        doc.text(60,120,'check_in:2022-11-04T00:00:00.000Z')
        doc.text(60,140,'check_out:2022-11-12T00:00:00.000Z')
        doc.text(60,160,'no_of_rooms:2')
        doc.text(60,180,' totalmember:5')
        doc.text(60,200,' payment:18000')
       doc.addPage()
       
       doc.text(60,60,'fullname:Rimas')
       doc.text(60,80,'nic:200031900795')
       doc.text(60,100,'phone:0775481788')
       doc.text(60,120,'check_in:2022-11-12T00:00:00.000Z')
       doc.text(60,140,'check_out:2022-11-05T00:00:00.000Z')
       doc.text(60,160,'no_of_rooms:1')
       doc.text(60,180,' totalmember:5')
       doc.text(60,200,' payment:15000')

       

       

        
        

        doc.save('a.pdf')
    }
    
    render() {
        return (
            <div>
                <div style={{backroundcolor:'red'}}>
              <u><center> <h1>Rooms Details Reports</h1></center></u> 
                <div style={{textAlign:'left'}}><button class="btn-hover color-9" onClick={this.pdfGenerate}> PDF </button></div>
 
                </div>
                
            </div>
        );
    }
}

export default Pdf;
