import Api, { type FormDataErrors } from '~/utils/api'

export interface FormDataCreateSmallForm {
    name: string | undefined,
    phone: string | undefined,
    email: string | undefined,
    form_type_id: 'SMALL_FORM'
}

export type FormDataCreateErrorsSmallForm = FormDataErrors<FormDataCreateSmallForm>

export const getDefaultFormDataCreate = (fromTrigger: string): FormDataCreate => {
    return {
        name: undefined,
        phone: undefined,
        email: undefined,
        is_agree_to_receive_ads: true,
        from_trigger: fromTrigger
    }
}

class Contacts extends Api {
    public async create(data: FormDataCreate) {
        await this.post<FormDataCreate>('/contacts/create', data)
    }
}

export default () => new Contacts