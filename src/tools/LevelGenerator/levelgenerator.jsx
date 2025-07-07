
import React from 'react';
import './levelgenerator.css'

const LevelGenerator = () => {
  return (
    <>
      <h1>Godot Level Generation Template</h1>
      <div className="documentation-container">


        <p>This project provides a template for a random level/dungeon generator in the Godot Engine. It includes tools for creating custom rooms, spawning items and enemies, and defining level rules.</p>

        <h2>Itch.io Page</h2>
        <p>You can find the project and download it from its itch.io page:</p>


        <h2>Documentation</h2>
        <p>Detailed documentation on how to use the template and customize the generation process can be found here:</p>

        <details><summary>Overview</summary>
          <h5>Level Generator Summary</h5>
          <div className="ms-2">
            <p>The level generator is a NavigationRegion2D with a script to connect random rooms together and create a navigation region to handle pathfinding between the rooms.</p>
            <p>Rooms can be almost any size and shape, can have 1-4 doors, and have set rotation angles.</p>
          </div>
          <h5>What's inside</h5>
          <div className="ms-3">
            <div>• Level Generator (level_generator.tscn)</div>
            <div>• Example Level (level_1.tscn)</div>
            <div>• Example Structural Connectors (straight_hallway, crossroads, corner, dead_end)</div>
            <div>• Example Rooms (start_room, large_room, treasure_room, great_room)</div>
            <div>• Example Special Rooms (key_room, end_room)</div>
            <div>• Example Enemy (bug)</div>
            <div>• Example Items (treasure, taco)</div>
            <div>• Room Creation Helpers (wall, overlap_area)</div>
          </div>
        </details>

        <details><summary>Installation/Setup</summary>
          <h5>Download</h5>
          <div className="ms-2">
            <div>The files are downloaded from the itch.io page linked above. It will download `levelgenerator.zip`. Extract the file to access it's contents.</div>
          </div>
          <h5>Opening Example Project</h5>
          <div className="ms-2">
            <div>You can open the project using Godot version 4.4 or later. Simply click import and open the project.godot file.</div>
          </div>
          <h5>Adding to existing Project</h5>
          <div className="ms-2">
            <div>If you want to add the level generator to an existing Godot 4.4 project, simply add the level_generator.tscn, level_generator.gd, dead_end.tscn, and overlap_area_2d.tscn files to the project. Use the instructions below to create rooms for the level generator to use.</div>
          </div>
        </details>

        <details><summary>Creating Room Prefabs</summary>
          <h5>Room Creation Steps</h5>
          <div className="ms-3">
            <div>1. Create a new scene with a Node2D root.</div>
            <div>2. Set the script for the root to `LevelRoom.gd`. (Or a script that extends LevelRoom)</div>
            <div>3. Add walls, collision, art, etc.</div>
            <div>4. Add an OverlapArea2D instance as a child of the root.</div>
            <div>5. Add a CollisionPolygon2D as a child of the OverlapArea2D.</div>
            <div>6. Set the polygon for the CollisionPolygon2D to cover the entire floor of the room (to prevent overlaps).</div>
            <div>7. Create up to 4 Node2D children in the position of the room openings named "east", "west", "north", or "south" in the corresponding directions.</div>
          </div>
        </details>

        <details><summary>Level Generation Logic</summary>
          <div className="ms-3">
            <h6>1. Place the start room. (This is the room at index 0 of the room_prefabs array)</h6>
            <h6>2. Pick a random room and try to fit it on a random room opening without overlapping areas</h6>
            <h6>3. Repeat step 2 until the minimum amount of rooms is met</h6>
            <h6>4. Try to place the special rooms on 2 random room openings</h6>
            <h6>5. Place a "dead end" room on all remaining openings</h6>
            <h6>6. Bake the navigation polygon</h6>
            <h6>7. Spawn items and enemies</h6>
          </div>
        </details>

        <details><summary>Spawning Items and Enemies</summary>
        <div className="ms-2">
          <p>Spawning items and enemies is handled by each individual room. You can select what you would like to spawn by setting the export variables on a LevelRoom.</p>
          <p>Spawns happen at random locations inside the collision polygon for the room's OverlapArea2D, slightly away from the walls.</p>
          <p>The chances of something spawning can be changed as well.</p>
          <p>If you want more than one thing to be able to spawn, you can create a new script that extends from LevelRoom and run the spawn function multiple times, as seen in the example `treasure_room.gd` and `great_room.gd`.</p>
        </div>
        </details>

        <details><summary>Pathfinding</summary>
          <p>Before generating the level, you need to set the navigation polygon to be a large enough to cover the entire area of the finished dungeon.</p>
          <p>When the rooms are finished being placed, the navigation polygon will be baked according to the collision bodies in the rooms.</p>
          <p>NavigationAgent2D nodes can then be used for pathfinding between rooms.</p>
        </details>

        <details><summary>Customization</summary>
          <p>You can customize any part of the level generation process to best fit your needs.</p>
          <h5>Customization Ideas</h5>
          <div className="ms-3">
            <div>• After generating the level, serialize it and send it to other players to allow for multiplayer</div>
            <div>• Adjust the generation so that it mainly only places rooms in one direction</div>
            <div>• Make some rooms more likely to generate than others</div>
            <div>• Add secret passages and hidden rooms</div>
            <div>• Adjust the way spawning and generation works based on a difficulty value</div>
          </div>
        </details>

        <details><summary>FAQ</summary>
          <p>No questions asked so far...</p>
        </details>

        <details><summary>Example Game</summary>
          <iframe frameborder="0" src="https://itch.io/embed/3617224?linkback=true&amp;border_width=2&amp;bg_color=151d28&amp;fg_color=ebede9&amp;link_color=fa5c5c&amp;border_color=5d7fac" width="554" height="169"><a href="https://fozzgames.itch.io/all-my-friends-are-squares">All My Friends Are Squares by FozzGames</a></iframe>
        </details>

        <details><summary>License</summary>
          <p>
            Godot Level Generation Template License<br />
            Copyright (c) 2025 Eli Barton
            <br /><br />
            Permission is granted to use, modify, and integrate this template into your own personal or commercial Godot Engine projects.
            <br /><br />
            Restrictions:<br />
            - You may not resell, repackage, or redistribute the unmodified template, or substantial portions of it, whether for free or for payment.<br />
            - You may not claim authorship of the original template.<br />
            - You may not upload the unmodified project to public repositories, asset stores, or marketplaces.
            <br /><br />
            You may:<br />
            - Modify the template and use it in your own commercial or non-commercial games or tools.<br />
            - Share your modified version as part of a larger project, provided the original template is not the primary focus.<br />
            - Credit the author (optional but appreciated).
            <br /><br />
            This license is intended to allow wide use of the template while protecting it from unauthorized resale or redistribution.
            <br /><br />
            For questions or licensing exceptions, contact: elidbarton@gmail.com
          </p>

        </details>

      </div>
    </>
  );
};

export default LevelGenerator;
