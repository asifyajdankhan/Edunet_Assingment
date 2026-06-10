@extends('layouts.admin')

@section('content')

<div class="app-content"> 
    <div class="side-app">

        <div class="page-header">
            <h4 class="page-title mt-2">Form Builder</h4>
        </div>

        <div class="row">

            <!-- Left Panel -->
            <div class="col-md-8">

                <div class="card">
                    <div class="card-body">

                        <div class="mb-4">
                            <label>Form Title</label>

                            <input
                                type="text"
                                class="form-control"
                                maxlength="200"
                                placeholder="Enter Form Title">
                        </div>

                        <div id="canvas"
                             class="border rounded p-5 text-center">

                            Drag elements from the right panel →
                        </div>    

                    </div> 
                </div>

                <div class="d-flex justify-content-between mt-3">
                     <button id ="cancelBtn" class= "btn mt-3">cancel</button> 
                    <button id="nextBtn" class="btn text-align-end btn-success mt-3"> Next</button>
                </div>    

            </div>

            <!-- Right Panel -->
            <div class="col-md-4">

                <div class="card">
                    <div class="card-header">
                        Add Fields
                    </div>

                    <div class="card-body">

                        <button class="btn btn-primary mb-2 w-100 field-btn"
                                data-type="text">
                            Text Input
                        </button>

                        <button class="btn btn-primary mb-2 w-100 field-btn"
                                data-type="textarea">
                            Text Area
                        </button>

                        <button class="btn btn-primary mb-2 w-100 field-btn"
                                data-type="number">
                            Number Input
                        </button>

                        <button class="btn btn-primary mb-2 w-100 field-btn"
                                data-type="dropdown">
                            Dropdown
                        </button> 

                        <button class="btn btn-primary mb-2 w-100 field-btn"
                                data-type="radio">
                            Radio Button
                        </button>

                    </div>
                </div>

            </div>

        </div>

    </div>
</div>

@endsection