import React, { useState } from  'react';

import { Container } from

import { FiEdit3, FiTrash } from 'react-icons/fi';

interface IFoodPlate {
    id: number;
    name: string;
    image: string;
    price: string;
    description: string,
    available: boolean;
}

interface IProps {
    food: IFoodPlate;
    handleDelete: ( id: number ) => { };
    handleEditFood: ( food: IFoodPlate ) => void;
}

const Food: React.FC<IProps> = ({
    food,
    handleDelete,
    handleEditFood,
}: IProps ) => {
    const [ isAvaible, setIsAvailable ] = useState( food.available );

    async function toggleAvailable ( ) : Promise <void> {
        
        //update status ( available)
        setIsAvailable (! isAvailable );
    }



    function setEditingFood ( ) : void {
        //set the id of the current item to the editing food 
        handleEditFood ( food );
    }
    
    return (
        <Container available = { isAvailable } >
            <header>
                <img src = { food.image } alt = { food.name }  />
            </header>
            <section className = "body">
                <h2>{ food.name }</h2>
                <p>{ food.description } </p>
                <p className = "price">
                    USD <b>{ food.price }</b>
                </p>
            </section>

            <section className = "footer">
                <div className = "icon-container">
                    <button
                    type="button"
                    className="icon"
                    onClick={() => setEditingFood()}
                    data-testid={`edit-food-${food.id}`}
                  >
                    <FiEdit3 size={20} />
                  </button>
        
                  <button
                    type="button"
                    className="icon"
                    onClick={() => handleDelete(food.id)}
                    data-testid={`remove-food-${food.id}`}
                  >
                    <FiTrash size={20} />
                  </button>
                </div>
        
                <div className="availability-container">
                  <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>
        
                  <label htmlFor={`available-switch-${food.id}`} className="switch">
                    <input
                      id={`available-switch-${food.id}`}
                      type="checkbox"
                      checked={isAvailable}
                      onChange={toggleAvailable}
                      data-testid={`change-status-food-${food.id}`}
                    />
                    <span className="slider" />
                  </label>
                </div>
              </section>
            </Container>
          );
        };
        
        export default Food;
        










}