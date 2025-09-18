import Api, { type FormDataErrors } from '~/utils/api'

export interface FormDataCreateSmallForm {
    name: string | undefined,
    phone: string | undefined,
    email: string | undefined,
    form_type_id: 'SMALL_FORM'
}

export type FormDataCreateErrorsSmallForm = FormDataErrors<FormDataCreateSmallForm>

export const getDefaultFormDataCreateSmallForm = (): FormDataCreateSmallForm => {
    return {
        name: undefined,
        phone: undefined,
        email: undefined,
        form_type_id: 'SMALL_FORM'
    }
}

class Contacts extends Api {
    public async create(data: FormDataCreate) {
        await this.post<FormDataCreate>('/contacts/create', data)
    }
}

export default () => new Contacts