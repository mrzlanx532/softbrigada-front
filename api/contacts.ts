import Api, { type FormDataErrors } from '~/utils/api'

export interface FormDataCreateSmallForm {
    name: string | undefined,
    phone: string | undefined,
    email: string | undefined,
    form_type_id: 'SMALL_FORM'
}

export interface FormDataCreateBigForm {
    name: string | undefined,
    phone: string | undefined,
    email: string | undefined,
    description: string | undefined,
    budget_id: string | undefined,
    deadline_id: string | undefined,
    file: File | undefined,
    form_type_id: 'BIG_FORM'
}

export interface FormDataCreateBrief {
    name: string | undefined,
    phone: string | undefined,
    email: string | undefined,
    form_type_id: 'BRIEF'
}

type FormDataCreateForm = FormDataCreateSmallForm | FormDataCreateBigForm | FormDataCreateBrief

export type FormDataCreateErrorsSmallForm = FormDataErrors<FormDataCreateSmallForm>
export type FormDataCreateErrorsBigForm = FormDataErrors<FormDataCreateBigForm>
export type FormDataCreateErrorsBrief = FormDataErrors<FormDataCreateBrief>

export const getDefaultFormDataCreateSmallForm = (): FormDataCreateSmallForm => {
    return {
        name: undefined,
        phone: undefined,
        email: undefined,
        form_type_id: 'SMALL_FORM'
    }
}

export const getDefaultFormDataCreateBigForm = (): FormDataCreateBigForm => {
    return {
        name: undefined,
        phone: undefined,
        email: undefined,
        description: undefined,
        form_type_id: 'BIG_FORM'
    }
}

export const getDefaultFormDataCreateBrief = (): FormDataCreateBrief => {
    return {
        name: undefined,
        phone: undefined,
        email: undefined,
        form_type_id: 'BRIEF'
    }
}

class Contacts extends Api {
    public async create(data: FormDataCreateForm) {
        await this.post<FormDataCreateForm>('/contacts/create', data)
    }
}

export default () => new Contacts