import Layout from '../components/Layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function quiz(){
    return(
        <Layout title="Ingrese su nombre | IMCYC">
            <Container>
                <Row>
                    <Col>
                        <h1>CUESTIONARIO IMCYC</h1>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <input type="text" name="nombre" className="loscampos" placeholder="Ingrese su nombre completo" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type="text" name="nombre" className="loscampos" placeholder="Ingrese su Correo Electrónico" />
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
                input {
                    width: 100%;
                    border: 0;
                    padding:10px 30px;
                    border-radius:20px;
                    margin: 5px;
                }
        `}</style>
        </Layout>
        
    )
}

export default quiz;