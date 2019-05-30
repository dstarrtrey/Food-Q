import React, { useState } from "react";
import styled from 'styled-components';
import "./Menu.css";

function Menu() {
  return (
    <>
			<div className="menuStyle">
				<br />
				<div className="introParagraph">
					<h2>Angry Fish Menu</h2>
					<hr />
					<p>
          Angry Fish Sushi has been regarded as one of the premiere sushi and Japanese 
          restaurants in the Bay Area for many years. menu focuses on the fresh seafood 
          and diverse dishes with its Japanese and Eastern flare. Our menu offers standard 
          sushi rolls, nigiri and sashimi and even some with a little enhancement. 
					</p>
				</div>
        
  <div class="container">
  <div class="menu flex-row flex-wrap flex-center">
    <div class="appetizers">
      <h2>Appetizers</h2>
      <div class="menu-item"> 
        <span class="menu-item-title">Edamame </span>
        <span>-</span>
        <span class="menu-item-price"> 6</span>
        <p class="menu-item-description">sautéed traditionally or angry, sprinkled with salts</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-title">Miso Soup </span>
        <span></span>
        <span>-</span>
        <span class="menu-item-price"> 4</span>
        <p class="menu-item-description">steaming broth with tofu, seaweed, and 
        green onion, serves two</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-title">Agedashi Tofu </span>
        <span>-</span><span class="menu-item-price"> 9</span>
        <p class="menu-item-description">crispy deep fried tofu served in flavorful tsuyu sauce, our most popular appetizer </p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-title">Japanese Spring Rolls </span>
        <span>-</span>
        <span class="menu-item-price"> 9</span>
        <p class="menu-item-description">salmon, crab meat, lettuce, avocado wrapped in rice paper</p>
      </div>
      <span><img class="fairyTaleRoll" src="images/fairytale_roll.jpg" alt="fairytale roll"></img></span>
    </div>

    <div class="appetizers">
    <span><img class="springRolls" src="images/spring_rolls.jpg" alt="spring rolls"></img></span>
      <h2>Chef Specials</h2>
      <div class="menu-item"> 
        <span class="menu-item-title">Edamame </span>
        <span>-</span>
        <span class="menu-item-price"> 6</span>
        <p class="menu-item-description">sautéed traditionally or angry, sprinkled with salts</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-title">Miso Soup </span>
        <span>-</span>
        <span class="menu-item-price"> 4</span>
        <p class="menu-item-description">steaming broth with tofu, seaweed, and 
        green onion, serves two</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-title">Agedashi Tofu </span>
        <span>-</span><span class="menu-item-price"> 9</span>
        <p class="menu-item-description">crispy deep fried tofu served in flavorful tsuyu sauce, our most popular appetizer </p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-title">Japanese Spring Rolls </span>
        <span>-</span>
        <span class="menu-item-price"> 9</span>
        <p class="menu-item-description">salmon, crab meat, lettuce, avocado wrapped in rice paper</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-title">Japanese Spring Rolls </span>
        <span>-</span>
        <span class="menu-item-price"> 9</span>
        <p class="menu-item-description">salmon, crab meat, lettuce, avocado wrapped in rice paper</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-title">Japanese Spring Rolls </span>
        <span>-</span>
        <span class="menu-item-price"> 9</span>
        <p class="menu-item-description">salmon, crab meat, lettuce, avocado wrapped in rice paper</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-title">Japanese Spring Rolls </span>
        <span>-</span>
        <span class="menu-item-price"> 9</span>
        <p class="menu-item-description">salmon, crab meat, lettuce, avocado wrapped in rice paper</p>
      </div>
    </div>

    <div class="entrees">
      <h2>Specialty Rolls	</h2>
      <div class="menu-item"> 
        <span class="menu-item-name">Burger Moderno </span>
        <span>-</span>
        <span class="menu-item-price"> 14</span>
        <p class="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-name">Lemon Red Snapper </span>
        <span>-</span>
        <span class="menu-item-price"> 28</span>
        <p class="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-name">Steak Diane </span>
        <span>-</span>
        <span class="menu-item-price"> 32</span>
        <p class="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-name">Steak Diane </span>
        <span>-</span>
        <span class="menu-item-price"> 32</span>
        <p class="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-name">Steak Diane </span>
        <span>-</span>
        <span class="menu-item-price"> 32</span>
        <p class="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-name">Steak Diane </span>
        <span>-</span>
        <span class="menu-item-price"> 32</span>
        <p class="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div> 
    </div>
    <div class="entrees">
      <h2>Bento Boxes	</h2>
      <div class="menu-item"> 
        <span class="menu-item-name">Burger Moderno </span>
        <span>-</span>
        <span class="menu-item-price"> 14</span>
        <p class="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-name">Lemon Red Snapper </span>
        <span>-</span>
        <span class="menu-item-price"> 28</span>
        <p class="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-name">Steak Diane </span>
        <span>-</span>
        <span class="menu-item-price"> 32</span>
        <p class="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-name">Steak Diane </span>
        <span>-</span>
        <span class="menu-item-price"> 32</span>
        <p class="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-name">Steak Diane </span>
        <span>-</span>
        <span class="menu-item-price"> 32</span>
        <p class="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <div class="menu-item"> 
        <span class="menu-item-name">Steak Diane </span>
        <span>-</span>
        <span class="menu-item-price"> 32</span>
        <p class="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      
    </div>
  </div>
</div>
</div>
			
		</>
	);
}

export default Menu;
