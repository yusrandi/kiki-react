import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HomeChart from '../home/home-chart';


export default function MyVerticallyCenteredModal(props) {
    return (
      
        <Modal
          {...props}
          size="lg"
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Diagram Pegawai
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4> {props.user.nama} </h4>
            <p>
            {props.user.nik}
            <br/>
            {props.user.jabatan}
           
            
            </p>

            

            <HomeChart user={props.user} />

            
          </Modal.Body>
          <Modal.Footer>
            <Button className="button is-primary" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}