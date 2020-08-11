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
                <Row md={4}>
                    <Col><input type="text" name="nombre" className="loscampos" placeholder="Ingrese su nombre completo" /></Col>
                    <Col><input type="text" name="nombre" className="loscampos" placeholder="Ingrese su Correo Electrónico" /></Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default quiz;