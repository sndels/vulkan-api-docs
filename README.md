# vulkan-api-docs README

Adds an editor context menu action that tries to open the Vulkan API doc for the symbol under the cursor in C and C++ files.

## Features

The action tries opening docs for both the raw symbol and simple mappings assuming a preceding `vk::`-namespace or `object.` for a method call like in [vulkan-hpp](https://github.com/KhronosGroup/Vulkan-Hpp). Opens all potentially matching docs: running on e.g. the method call in `cmd.buildAccelerationStructuresKHR(...)` opens both [vkCmdBuildAccelerationStructuresKHR](https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/vkCmdBuildAccelerationStructuresKHR.html) and [vkBuildAccelerationStructuresKHR](https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/vkBuildAccelerationStructuresKHR.html).

## Known Issues

Lag between docs opening if more than one are opened. Seems like an intentional feature in `vscode.env.openExternal()`.

## Release Notes

### 0.1.0

Initial release

## Dev-notes

Run `npm install dependencies` to setup env. `npm run -S vscode:prepublish` to build publishable output.
