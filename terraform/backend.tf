terraform {
  cloud {
    organization = "morning-night-guild"

    workspaces {
      name = "platform-web"
    }
  }
}
