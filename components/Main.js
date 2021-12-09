import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';


export default function Main(){
    return(
        <>
        <CreateForm />
        <ReportTable />
        </>
    )
}