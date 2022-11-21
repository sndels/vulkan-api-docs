# vulkan-api-docs

Adds a VSCode editor context menu action that tries to open the Vulkan API doc url for the symbol under the cursor in C and C++ files.

## Features

The action tries opening docs for both the raw symbol and simple mappings assuming a preceding `vk::`-namespace or `object.` for a method call like in [vulkan-hpp](https://github.com/KhronosGroup/Vulkan-Hpp). Opens all potentially matching docs: running on e.g. the method call in `cmd.buildAccelerationStructuresKHR(...)` opens both [vkCmdBuildAccelerationStructuresKHR](https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/vkCmdBuildAccelerationStructuresKHR.html) and [vkBuildAccelerationStructuresKHR](https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/vkBuildAccelerationStructuresKHR.html).

## Known Issues

Lag between docs opening if more than one are opened. Seems like an intentional feature in `vscode.env.openExternal()`.

## Installing

Not in the marketplace yet, but the release vsix can be installed manually with `code --install-extension [vsix]`.

## Release Notes

### 0.1.0

Initial release
