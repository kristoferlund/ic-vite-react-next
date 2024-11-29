FROM ghcr.io/dfinity/icp-dev-env:13

RUN apt -yqq install --no-install-recommends wget

RUN rustup component add clippy
RUN rustup component add rustfmt

# Install pnpm
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -

# Configures Git to trust all directories as “safe” within the container, bypassing user ownership checks.
RUN git config --global --add safe.directory '*'

