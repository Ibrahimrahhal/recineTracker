import React, { Component } from 'react';
import { Form, Formik } from 'formik';

class FormCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        window['form'] = this.props
        return (
            <Formik {...this.props.formProps}>
                <Form>
                    {this.props.children}
                </Form>
            </Formik>
        );
    }
}

export default FormCustom;