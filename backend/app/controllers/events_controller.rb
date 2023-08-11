class EventsController < ApplicationController
    before_action :set_event, only: [:show, :edit, :update, :destroy]
  
    def index
      @events = Event.all
      render json: @events
    end
  
    def show
      render json: @event
    end
  
    def new
      @event = Event.new
    end
  
    def create
      @event = Event.new(event_params)
      if @event.save
        render json: @event, status: :created
      else
        render json: @event.errors, status: :unprocessable_entity
      end
    end
  
    def edit
    end
  
    def update
      if @event.update(event_params)
        render json: @event
      else
        render json: @event.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @event.destroy
      head :no_content
    end
end