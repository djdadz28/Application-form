import React, { Component } from 'react'
import FormPrint from './FormPrint'
import Button from '@material-ui/core/Button'
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

export class PrintTest extends Component {
    render() {
        return (
            <div>
                <Button type="submit">Print!</Button>
            </div>
        )
    }
}

export default PrintTest
