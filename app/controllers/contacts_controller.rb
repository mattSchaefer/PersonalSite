class ContactsController < ApplicationController
    def new
        @contact = Contact.new(contact_params)
    end
    def create
        respond_to :html, :json, :xml
        @contact =  Contact.new(contact_params)
        if @contact.save!
            render json: {
                contact: @contact,
                status: 200,
                message: 'Contact creation successful'
            }
        else
            render json: {
                message: 'theres been an issue',
                status: 401
            }
        end
        rescue
            render json: {status: 401, message: 'very bad'}
    end
    private
        def contact_params
            params.permit(:name, :email, :message)
        end
end
