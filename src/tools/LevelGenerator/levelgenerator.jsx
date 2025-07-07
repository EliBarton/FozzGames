
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
            <div>If you want to add the level generator to an existing Godot 4.4 project, simply add the level_generator.tscn, level_generator.gd, and overlap_area_2d.tscn files to the project. Use the instructions below to create rooms for the level generator to use.</div>
          </div>
        </details>

        <details><summary>Quick Start Guide</summary>
          <p>Content</p>
        </details>

        <details><summary>Creating Room Prefabs</summary>
          <p>Content</p>
        </details>

        <details><summary>Level Generation Logic</summary>
          <p>Content</p>
        </details>

        <details><summary>Spawning Items and Enemies</summary>
          <p>Content</p>
        </details>

        <details><summary>Pathfinding</summary>
          <p>Content</p>
        </details>

        <details><summary>Customization</summary>
          <p>Content</p>
        </details>

        <details><summary>FAQ</summary>
          <p>Content</p>
        </details>

        <details><summary>Example Game</summary>
          <iframe frameborder="0" src="https://itch.io/embed/3617224?linkback=true&amp;border_width=2&amp;bg_color=151d28&amp;fg_color=ebede9&amp;link_color=fa5c5c&amp;border_color=5d7fac" width="554" height="169"><a href="https://fozzgames.itch.io/all-my-friends-are-squares">All My Friends Are Squares by FozzGames</a></iframe>
        </details>

        <details><summary>License</summary>
          <p>Godot Level Generation Template License
            Copyright (c) 2025 [Your Name or Studio]

            Permission is granted to use, modify, and integrate this template into your own personal or commercial Godot Engine projects.

            Restrictions:
            - You may not resell, repackage, or redistribute the unmodified template, or substantial portions of it, whether for free or for payment.
            - You may not claim authorship of the original template.
            - You may not upload the unmodified project to public repositories, asset stores, or marketplaces.

            You may:
            - Modify the template and use it in your own commercial or non-commercial games or tools.
            - Share your modified version as part of a larger project, provided the original template is not the primary focus.
            - Credit the author (optional but appreciated).

            This license is intended to allow wide use of the template while protecting it from unauthorized resale or redistribution.

            For questions or licensing exceptions, contact: [your email or website]
          </p>
        </details>

      </div>
    </>
  );
};

export default LevelGenerator;
